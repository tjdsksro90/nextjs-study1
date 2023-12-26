import EventList from "@/components/events/event-list";
// import { getFeaturedEvents } from "@/dummy-data";
import { getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";

export default function Home(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="페이지 설명" />
      </Head>
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
