import React from "react";
import { ItemList } from "./ItemList";
import { StatsCard } from "./StatsCard";
import { RealTimeIndicator } from "./RealTimeIndicator";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>🏋️ Dashboard del Gimnasio</h1>
      <StatsCard />
      <ItemList />
      <RealTimeIndicator />
    </div>
  );
};