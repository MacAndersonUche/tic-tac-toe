export const modalStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

export const MainContainer: React.CSSProperties = {
	width: "600px",
	height: " 600px",
	margin: "0 auto",
	color: " #fff",
	border: "1px solid #2c3e50",
    borderRadius: "10px",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};


export const Box: React.CSSProperties = {
    border: "2px solid #2c3e50",
    borderRadius: "2px",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    fontSize: "4em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: "grey",
}