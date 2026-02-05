import TrainersSection from "../components/trainers/TrainersSection";
import { API_BASE_URL } from "../util/constants";

export default function TrainersPage() {
  return <TrainersSection />;
}

export async function trainersLoader() {
  const response = await fetch(`${API_BASE_URL}/trainers/all`);

  if (!response.ok) {
    throw new Error("Error from trainers");
  }

  return response.json();
}