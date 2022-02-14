import Link from "next/link";
import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Header = () => {
	return (
		<header>
			<nav data-test-id="navigation">
				<Link href="/">
					<FormatListBulletedIcon />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
