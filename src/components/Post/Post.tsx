import styles from "./Post.module.scss";
import { FaHeart, FaShareAlt } from "react-icons/fa";

interface PostProps {
	content: any;
	date: any;
}

export const Post: React.FC<PostProps> = ({ content, date }) => {
	return (
		<>
			<p className={styles.postContent}>{content}</p>

			<ul className={styles.postMeta}>
				<li className={styles.postMetaData}>
					<FaHeart />
					34
				</li>
				<li className={styles.postMetaData}>{date}</li>
				<li className={styles.postMetaData}>
					<FaShareAlt></FaShareAlt>
					Share
				</li>
			</ul>
		</>
	);
};
