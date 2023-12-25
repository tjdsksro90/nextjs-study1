import EventList from "@/components/events/event-list";
// import { getFeaturedEvents } from "@/dummy-data";
import { getFeaturedEvents } from "@/helpers/api-util";

export default function Home(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
