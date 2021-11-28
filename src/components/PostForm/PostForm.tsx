import { Textarea, Button } from "@chakra-ui/react";
import React from "react";
import styles from "./PostForm.module.scss";
interface PostFormProps {}

const PostForm: React.FC<PostFormProps> = ({}) => {
	return (
		<form>
			<Textarea className={styles.textInput}></Textarea>
			<Button colorScheme="purple" className={styles.textBUtton}>
				Add New Post
			</Button>
		</form>
	);
};
export default PostForm;
