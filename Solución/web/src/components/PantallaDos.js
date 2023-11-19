		import React, { useState } from "react";
		import { useNavigate } from "react-router-dom";

		function PantallaDos() {
			const navigate = useNavigate();
			return (
				<div className="pantalla-dos">
					<div className="container-left">
						<div className="container-up-left">
							<div className="motores-1-4">
								<div className="grafana-motor-1">
								<h1 onClick={() => navigate("/DetalleIndividual")} cursor="pointer">+</h1>	
								<iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=1" height="200px" width="120px"></iframe></div>
								<div className="grafana-motor-1"><iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=2" height="200px" width="120px"></iframe></div>
								<div className="grafana-motor-1"><iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=3" height="200px" width="120px"></iframe></div>
								<div className="grafana-motor-1"><iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=4" height="200px" width="120px"></iframe></div>
							</div>
							<div className="motores-5-7">
								<div className="grafana-motor-2"><iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=5" height="200px" width="120px"></iframe></div>
								<div className="grafana-motor-2"><iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=6" height="200px" width="120px"></iframe></div>
								<div className="grafana-motor-2"><iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=7" height="200px" width="120px"></iframe></div>
							</div>
						</div>
						<div className="container-down-left">
							<div className="grafana-horizonte">
							<iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=light&panelId=8" height="100%" width="90%"></iframe>
							</div>
						</div>
					</div>
					<button
					className="flecha izquierda"
					onClick={() => navigate("/Flujos")}
				>
					←
					</button>
					<button
					className="flecha derecha"
					onClick={() => navigate("/PantallaAnalisis")}
				>
					→
					</button>
					<div className="container-right">
						<div className="container-up-right">
							<div className="kpi-1">
								<div className="grafana-kpi">
								<iframe src="http://192.168.0.142:3000/d-solo/c5dfcc6b-5114-42e9-b6ad-7986f614dcad/new-dashboard?orgId=1&from=1686451817868&to=1686451849367&tab=transform&theme=light&panelId=4" height="100%" width="100%"></iframe>
								</div>
							</div>
							<div className="kpi-2-3">
								<div className="grafana-kpi">
								<iframe src="http://192.168.0.142:3000/d-solo/c5dfcc6b-5114-42e9-b6ad-7986f614dcad/new-dashboard?orgId=1&from=1686451817868&to=1686451849367&tab=transform&theme=light&panelId=3" height="100%" width="100%"></iframe>
								</div>
								<div className="grafana-kpi">
								<iframe src="http://192.168.0.142:3000/d-solo/c5dfcc6b-5114-42e9-b6ad-7986f614dcad/new-dashboard?orgId=1&from=1686451817868&to=1686451849367&tab=transform&theme=light&panelId=1" height="100%" width="100%"></iframe>
								</div>
							</div>
						</div>
						<div className="container-down-right">
							<div className="grafana-alerts">
							<iframe src="http://192.168.0.142:3000/d-solo/cc897648-dc8e-457c-9be0-11a55ec7294c/rusei?orgId=1&from=1686451799661&to=1686451850484&theme=dark&panelId=9" height="100%" width="94%"></iframe>
							</div>
						</div>
					</div>
				</div>
			);
		}

		export default PantallaDos;
