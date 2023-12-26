import { getAllEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function EventsPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="페이지 설명" />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
