import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

function LogoutBtn() {
	const dispatch = useDispatch();
	const handleLogout = () => {
		authService
			.logout()
			.then(() => {
				dispatch(logout());
			})
			.catch((error) => {
				console.log("Component Header :: LogoutBtn :: ", error);
				throw error;
			});
	};
	return (
		<button
			onClick={handleLogout}
			className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
		>
			Logout
		</button>
	);
}

export default LogoutBtn;
