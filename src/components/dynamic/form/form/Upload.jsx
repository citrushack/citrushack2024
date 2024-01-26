import { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { FaFilePdf, FaImage, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { BYTES } from "@/data/dynamic/Bytes";
import { readFileAsBase64, compress } from "@/utils/convert";

const getSize = (maxSize) => BYTES[maxSize[1]] * maxSize[0];
const getType = (types) => "." + types.join(",.");

const Upload = ({ field, user, setUser, text, maxSize, types, required }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleInput = async (e) => {
    setUploading(true);
    const blob = await compress(e.target.files[0]);
    if (blob.size > getSize(maxSize)) {
      toast(`❌ File too big, exceeds ${maxSize[0]} ${maxSize[1]}!`);
      return;
    }
    setFile(blob);
    const base64 = await readFileAsBase64(blob);
    setUser({ ...user, [field]: base64 });
    setUploading(false);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-0 font-semibold">
        {text}
        {required && <span className="text-citrus-green-100">*</span>}
      </p>
      <div className="flex items-center w-full flex-col" data-cy="upload">
        {!file && (
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-fit rounded-lg cursor-pointer bg-citrus-gray-100 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-4">
              <BsUpload className=" text-3xl mb-2 text-citrus-green-100" />
              <p className="text-sm text-gray-500 font-semibold">
                Upload from my computer
              </p>
            </div>
            <div className="w-full" data-cy="upload-input">
              <input
                id="dropzone-file"
                onChange={handleInput}
                type="file"
                className="hidden"
                accept={getType(types)}
              />
            </div>
          </label>
        )}
        {file && (
          <div
            className="flex items-center justify-between w-full my-2 bg-citrus-gray-100 px-2 py-2"
            data-cy="upload-success"
          >
            <div className="flex items-center">
              {file.type.split("/")[0] === "image" ? (
                <FaImage className="text-xl mr-2" />
              ) : (
                <FaFilePdf className="text-xl mr-2" />
              )}
              {file.name}
            </div>
            <FaTimes
              className="text-gray-500 hover:cursor-pointer hover:text-red-600"
              onClick={() => setFile(null)}
              data-cy="upload-cancel"
            />
          </div>
        )}
      </div>
      {uploading && "UPLOADING ..."}
    </div>
  );
};

export default Upload;
