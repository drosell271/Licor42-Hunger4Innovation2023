import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const calculateCableWidth = (kw) => {
  const maxKw = 3384;
  const maxWidth = 14;
  const minWidth = 0;
  return Math.max((kw / maxKw) * maxWidth, minWidth);
};


const FlowCable = ({ kw }) => (
  <div className="flow-cable" style={{ width: `${calculateCableWidth(kw)}px` }}></div>
);

const MotorWithCable = ({ name, kw }) => (
  <div className="motor-with-cable">
    <div className="motor-box">
      <div className="motor-label">{name}</div>
    </div>
    <FlowCable kw={kw} />
  </div>
);


function PantallaUno() {

  const navigate = useNavigate();
  const [motors, setMotors] = useState(Array.from({ length: 7 }, (_, i) => ({ name: `M${i + 1}`, kw: Math.random() * 3384 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setMotors(motors.map(motor => ({
        ...motor,
        kw: Math.max(0, Math.min(3384, motor.kw + (Math.random() - 0.5) * 500)) // Variación aleatoria cerca del valor anterior
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, [motors]);

  const totalCableWidth = useMemo(() => motors.reduce((sum, motor) => sum + calculateCableWidth(motor.kw), 0), [motors]);
 
  const totalCableHeight1 = totalCableWidth * (0.05 + Math.random() * 0.1);
  const totalCableHeight2 = totalCableWidth * (0.15 + Math.random() * 0.1);
  const totalCableWidth2 = totalCableWidth - totalCableHeight1 - totalCableHeight2;
  const verticalConnectorOffset = useMemo(() => totalCableWidth / 2, [totalCableWidth]);
	
  const IntermediateConsumption = ({ className }) => (
	<div className={className}>
	  <div className={`${className}-box`}>Consumo Intermedio</div>
	  <div className={`${className}-cable` }style={{ 
				position: `absolute`,
				height: `${totalCableHeight1}px`, 
				width: `75%`,
				right: `30`,
			  }}></div>
	</div>
  );
  const IntermediateConsumption2 = ({ className }) => (
	<div className={className}>
	  <div className={`${className}-box`}>Consumo Intermedio</div>
	  <div className={`${className}-cable` }style={{
				position: `absolute`,
				height: `${totalCableHeight2}px`, 
				width: `75%`,
				right: `30`,
			  }}></div>
	</div>
  );
  
	return (
		<div className="diagram-container">
		  <div className="motors-container">
			{motors.map(motor => (
			  <MotorWithCable key={motor.name} name={motor.name} kw={motor.kw} />
			))}
		  </div>
		  <div className="horizontal-connector" style={{ height: `${totalCableWidth*0.3}px` }}></div>
		  <div 
			className="vertical-connector" 
			style={{ 
			  width: `${totalCableWidth}px`, 
			  left: `calc(50% - ${verticalConnectorOffset}px)` 
			}}
		  ></div>
		  <button
	className="flecha derecha"
	onClick={() => navigate("/")}
	>
	→
	</button>
		  <div 
			className="vertical-connector-2" 
			style={{ 
			  width: `${totalCableWidth2}px`, 
			  left: `calc(50% - ${verticalConnectorOffset}px)` 
			}}>
			</div>
		  <IntermediateConsumption className="intermediate-consumption" style={{ 
			  height: `${totalCableHeight1}px`, 
			  left: `calc(50% - ${verticalConnectorOffset}px)` 
			}} />
		  <IntermediateConsumption2 className="left-intermediate-consumption"  />
		  <div className="plant-box">
			<div className="plant">Planta de Producción</div>
		  </div>
		</div>
	  );
}

export default PantallaUno;
