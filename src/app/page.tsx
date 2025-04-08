import { BaseTemplate } from "@/ui";
import { TodayForecast } from "@/features/today-forecast";

export default function Home() {
  return (
    <BaseTemplate>
      <TodayForecast />
    </BaseTemplate>
  );
}
