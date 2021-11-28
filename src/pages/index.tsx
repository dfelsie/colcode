import {
	Link as ChakraLink,
	Text,
	Code,
	List,
	ListIcon,
	ListItem,
	Textarea,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import styles from "../styles/Home.module.scss";
import "@fontsource/open-sans";
import { Button } from "@chakra-ui/react";
import { Post } from "../components/Post";
import PostForm from "../components/PostForm";
import Bio from "../components/Bio";
const Index = () => (
	<div className={styles.container}>
		<main className={styles.main}>
			<Bio
				tagline="Me"
				name="Daniel Felsenthal"
				role="Full-Stack Developer"
				image="../assets/images/reelitin.jpg"
			/>{" "}
			<ul className={styles.list}>
				<li>
					<Post content="New Post" date="3/2/2021"></Post>
				</li>
				<li>
					<Post content="New Post" date="3/2/2021"></Post>
				</li>
				<li>
					<Post content="New Post" date="3/2/2021"></Post>
				</li>
				<li>
					<Post content="New Post" date="3/2/2021"></Post>
				</li>
			</ul>
			<PostForm></PostForm>
		</main>
	</div>
);

export default Index;
