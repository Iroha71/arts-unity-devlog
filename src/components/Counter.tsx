import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="d-flex align-items-center gap-3 border rounded p-3">
			<button
				className="btn btn-dark btn-sm"
				onClick={() => setCount(count + 1)}
			>
				+1
			</button>
			<span className="fs-5 fw-semibold">count: {count}</span>
		</div>
	);
}
