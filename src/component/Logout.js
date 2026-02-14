import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Logout() {
  
  const navigate = useNavigate();
  async function LogoutUser() {
    try {
      const res = await axios.post(
        "https://abdalrhman.cupital.xyz/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
    } catch (err) {
      console.log(err);
    } finally {
      localStorage.removeItem("token");
      navigate("/", { replace: true });
    }
  }
  return (
    <div>
      <button onClick={LogoutUser}>logout</button>
      <h2>hello</h2>
      <h2>hello</h2>
      <h2>hello</h2>
      <h2>hello</h2>
      <h2>hello</h2>
      <h2>hello</h2>
    </div>
  );
}
