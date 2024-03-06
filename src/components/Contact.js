import React from "react";
const Contact = () => {
  const handleEmail = () => {
    const copyText = document.getElementById("copyEmail");
    handleCopyClick(copyText);
  };

  const handleNum = () => {
    const copyText = document.getElementById("copyNum");
    handleCopyClick(copyText);
  };

  const handleCopyClick = (copyText) => {
    const range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.alert("Text Copied");
    window.getSelection().removeAllRanges();
  };

  return (
    <div className="flex p-8 bg-[#ffffee]">
      <div className="flex flex-wrap py-4">
        <p className="text-4xl  hover:cursor-pointer">Contact Me Via -</p>
      </div>
      <div className="pl-[50px] text-4xl">
        <div className="flex flex-wrap py-4">
          <p className="mr-4">Email:</p>
          <p
            id="copyEmail"
            className="mb-4 hover:text-orange-400 hover:cursor-pointer"
            onClick={handleEmail}
          >
            singhalanimesh06@gmail.com
          </p>
        </div>
        <div className="flex flex-wrap py-4">
          <p className="mr-4">Phone Number:</p>
          <p
            id="copyNum"
            className="mb-4 hover:text-orange-400 hover:cursor-pointer"
            onClick={handleNum}
          >
            +916290572904
          </p>
          {/* <h1>hello</h1> */}
        </div>

        <p className="text-sm my-4">Click on Email and Phone Number to Copy</p>
      </div>
    </div>
  );
};

export default Contact;
