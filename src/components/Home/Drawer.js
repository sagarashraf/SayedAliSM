import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
	BsFillBarChartLineFill,
} from "react-icons/bs";
import "./Drawer.css";
import { Row, Button } from "react-bootstrap";
import { OverView } from "../OverView/OverView";

export const Drawer = () => {
	const [arrowHandler, setArrowHandler] = useState(false);
	const { toggleSidebar, collapseSidebar } = useProSidebar();
	const arrowHandle = () => {
		collapseSidebar();
		setArrowHandler(!arrowHandler);
	};
	return (
		<>
			<div
				style={{ display: "flex", height: "100%", minHeight: "400px" }}
				id='header'>
				<Sidebar
					transitionDuration={1000}
					collapsed
					defaultCollapsed
					collapsedWidth='70px'>
					<div className='text-center'>
						{" "}
						{arrowHandler ? (
							<BsFillArrowLeftCircleFill
								onClick={arrowHandle}
								style={{ fontSize: "19px" }}
							/>
						) : (
							<BsFillArrowRightCircleFill
								style={{ fontSize: "19px" }}
								onClick={arrowHandle}
							/>
						)}
					</div>

					<Menu iconShape='square'>
						<MenuItem icon={<BsFillBarChartLineFill />}>Dashbaord</MenuItem>
						<MenuItem icon={<FaList />}>Category</MenuItem>

						<MenuItem icon={<RiPencilLine />}>Author</MenuItem>
						<MenuItem icon={<BiCog />}>Settings</MenuItem>
					</Menu>
					<Menu iconShape='square'>
						<MenuItem icon={<FiLogOut />}>Logout</MenuItem>
					</Menu>
				</Sidebar>
			</div>
		</>
	);
};
