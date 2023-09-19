import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "../../../../firebase";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
  query,
  where,
  arrayRemove,
  deleteField,
} from "firebase/firestore";

export async function POST(req) {
  const res = NextResponse;
  const {
    phone,
    discord,
    major,
    grade,
    gender,
    shirt,
    availability,
    response,
  } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await updateDoc(doc(db, "users", session.user.id), {
        phone: phone,
        discord: discord,
        major: major,
        grade: grade,
        gender: gender,
        shirt: shirt,
        response: response,
        "status.mentors": "pending",
        availability: availability,
        role: arrayUnion("mentor"),
      });
      return res.json({ message: "OK" }, { status: 200 });
    } catch (err) {
      return res.json(
        { message: `Internal Server Error: ${err}` },
        { status: 500 }
      );
    }
  } else {
    return res.json(
      { error: "Invalid Authentication Credentials." },
      { status: 401 }
    );
  }
}

export async function GET() {
  const res = NextResponse;
  const session = await getServerSession(authOptions);
  const output = [];

  if (session) {
    if (session.user.role.includes("admin")) {
      try {
        const snapshot = await getDocs(
          query(
            collection(db, "users"),
            where("role", "array-contains", "mentor")
          )
        );
        snapshot.forEach((doc) => {
          output.push({
            ...doc.data(),
            uid: doc.id,
            selected: false,
            hidden: false,
          });
        });
        return res.json({ message: "OK", items: output }, { status: 200 });
      } catch (err) {
        return res.json(
          { message: `Internal Server Error: ${err}` },
          { status: 500 }
        );
      }
    } else {
      return res.json({ message: `Forbidden Access` }, { status: 403 });
    }
  } else {
    return res.json(
      { error: "Invalid Authentication Credentials" },
      { status: 401 }
    );
  }
}

export async function PUT(req) {
  const res = NextResponse;
  const { objects, attribute, status } = await req.json();
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role.includes("admin")) {
      try {
        objects.forEach(async (object) => {
          if (attribute === "role") {
            await updateDoc(doc(db, "users", object.uid), {
              role: arrayRemove("mentor"),
              "status.mentors": deleteField(),
            });
          } else if (attribute === "status") {
            await updateDoc(doc(db, "users", object.uid), {
              "status.mentors": status,
            });
          }
        });

        return res.json({ message: "OK" }, { status: 200 });
      } catch (err) {
        return res.json(
          { message: `Internal Server Error: ${err}` },
          { status: 500 }
        );
      }
    } else {
      return res.json({ message: `Forbidden Access` }, { status: 403 });
    }
  } else {
    return res.json(
      { error: "Invalid Authentication Credentials" },
      { status: 401 }
    );
  }
}
