import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import axios from "axios";
import Popup from "./Components/PopUp";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [currentProducts, setCurrentProducts] = useState([]);


	useEffect(() => {
		const getItems = async () => {
			const params = {
				StoreID: 4,
				UserAddressID: 60877,
			};
			try {
				const response = await axios.get(
					"https://api.manoapp.com/api/v1/users/products/whats_new",
					{
						headers: { Authorization:'f44a4aabfc5992514d262d7f517327e7' },
						params,
					}
				);
				setCurrentProducts(response.data);
			} catch (error) {
				console.error("Error fetching items:", error);
			}
		};
		getItems();
	}, []);

	const handleProductClick = (product) => {
		setSelectedProduct(product);
		setIsOpen(true);
	};

	const handleClosePopup = () => {
		setSelectedProduct(null);
		setIsOpen(false);
	};

	return (
		<>
			<h1>Welcome to MANO</h1>
			<span>What's New</span>

			<div>
				{currentProducts.map((product) => (
					<div
						key={product.id}
						className="product">
						<div onClick={() => handleProductClick(product)}>
							<img
								src={product.url}
								alt={product.title}
							/>
							<h3>{product.title}</h3>
							<p>Price: ${product.price}</p>
						</div>
					</div>
				))}
			</div>

			<Popup
				product={selectedProduct}
				isOpen={isOpen}
				onClose={handleClosePopup}
			/>
		</>
	);
}

export default App;
