import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
