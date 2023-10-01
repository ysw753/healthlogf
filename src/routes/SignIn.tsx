import React, { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    id: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 사용자가 입력한 값들은 formData 객체에 저장되어 있음
    console.log("Form data:", formData);
  };

  return (
    <div className="h-screen   flex items-center  justify-center">
      <form
        onSubmit={saveHandler}
        className="flex flex-col justify-center p-2 w-[500px] h-[500px] bg-blue-300 "
      >
        <input
          className="h-[50px] m-1"
          type="text"
          name="username"
          placeholder="이름"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          className="h-[50px] m-1"
          type="text"
          name="id"
          placeholder="아이디"
          value={formData.id}
          onChange={handleInputChange}
        />
        <input
          className="h-[50px] m-1"
          type="text"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input className="mt-2" type="submit" value={"저장"} />
      </form>
    </div>
  );
}
