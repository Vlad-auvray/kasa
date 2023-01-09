import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carroussel from "../../components/Carroussel/Carroussel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Note from "../../components/Note/Note";
import Tag from "../../components/Tag/Tag";
import axios from "axios";

export default function Logement() {
	const params = useParams();
	const navigate = useNavigate();

	const [selectedAppart, setSelectedAppart] = useState();
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get("/logements.json"); 
			const selected = res.data.find(({id}) => id === params.id);
			res.data.map(() => setSelectedAppart(selected));
			if (selected === undefined) {
				navigate("/404", { state: { message: "Aucune donnée trouvée." } }); 
			}
		};
		getData();
		// eslint-disable-next-line
	}, []); 
	const slideImg = selectedAppart && selectedAppart.pictures;
	const tags = selectedAppart && selectedAppart.tags;
	const equipments = selectedAppart && selectedAppart.equipments;
	const equip =
		selectedAppart &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	return (
		selectedAppart && (
			<div key={params.id} className="fiche-block">
				<Carroussel slides={slideImg} />
				<section className="hostInfo-block">
					<div className="title-tags-block">
						<div className="title-block redFont">
							<h1>{selectedAppart.title}</h1>
							<h3>{selectedAppart.location}</h3>
						</div>
						<div className="tags-block">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-block">
						<div className="host-block redFont">
							<Host
								hostName={selectedAppart.host.name}
								hostPic={selectedAppart.host.picture}
							/>
						</div>
						<div className="note-block">
							<Note score={selectedAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-block">
					<Collapse
						aboutTitle="Description"
						aboutText={selectedAppart.description}
					/>
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}
