import appwriteService from "../../appwrite/configure.js";
import { Link } from "react-router-dom";

// function PostCard({ $id, title, featuredImage }) {
function PostCard({ ...post }) {
	return (
		<Link to={`/post/${post.$id}`}>
			<div className="w-full bg-gray-100 rounded-xl p-4">
				<div className="w-full justify-center mb-4">
					<img
						src={appwriteService.getFilePreview(post.featuredImage)}
						alt={post.title}
						className="rounded-xl"
					/>
				</div>
				{/* <h2 className="text-xl font-bold">{title}</h2> */}
				<h2 className="text-xl font-bold">{post.title}</h2>
			</div>
		</Link>
	);
}

export default PostCard;
