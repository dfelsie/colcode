import styles from "./Bio.module.scss";

import React, { ReactElement } from "react";

interface Props {
	image;
	name;
	tagline;
	role;
}

function Bio({ image, name, tagline, role }: Props): ReactElement {
	return (
		<div className={styles.bio}>
			<div className={styles.bioImage}>
				<img src={"/reelitin.jpg"} alt={`Headshot of ${name}`}></img>
			</div>
			<div className={styles.bioContent}>
				<p className={styles.bioContentName}>{name}</p>
				<p className={styles.bioContentTagline}>{tagline}</p>
				<p className={styles.bioContentRole}>{role}</p>
			</div>
		</div>
	);
}

export default Bio;
