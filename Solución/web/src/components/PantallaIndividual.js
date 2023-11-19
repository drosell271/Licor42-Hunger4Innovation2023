import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PantallaIndividual() {
	const navigate = useNavigate();
	return (
		<div className="pantalla-individual">
			<div className="container-left-2">
				<div className="container-kpi"> 
				<h2 onClick={() => navigate("/")} cursor="pointer">x</h2>
					<iframe src="http://192.168.0.142:3000/d-solo/c5dfcc6b-5114-42e9-b6ad-7986f614dcad/new-dashboard?orgId=1&from=1686451817868&to=1686451849367&theme=light&panelId=7" width="100%" height="100%"></iframe>
				</div>
				<div className="container-kpi"> 
					<iframe src="http://192.168.0.142:3000/d-solo/c5dfcc6b-5114-42e9-b6ad-7986f614dcad/new-dashboard?orgId=1&from=1686451817868&to=1686451849367&theme=light&panelId=6" width="100%" height="100%"></iframe>
				</div>
				</div>
			<div className="container-right-2">
				<div className="container-kpi"> 
					<iframe src="http://192.168.0.142:3000/d-solo/c5dfcc6b-5114-42e9-b6ad-7986f614dcad/new-dashboard?orgId=1&from=1686451817868&to=1686451849367&theme=light&panelId=5"width="100%" height="100%"></iframe>
				</div>
				<div className="container-kpi"> 
					<iframe src="http://192.168.0.142:3000/d-solo/c5dfcc6b-5114-42e9-b6ad-7986f614dcad/new-dashboard?orgId=1&from=1686451817868&to=1686451849367&theme=light&tab=transform&panelId=1" width="100%" height="100%"></iframe>
				</div>
			</div>
		</div>
	);
}

export default PantallaIndividual;
