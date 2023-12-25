import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
// import { getEventById } from "@/dummy-data";
import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from "@/helpers/api-util";
// import { useRouter } from "next/router";
import { Fragment } from "react";

export default function EventsDetailPage(props) {
  // const router = useRouter();

  // const eventId = router.query.eventId;
  const event = props.selectedEvent;

  if (!event) {
    return <div className="center">Lading...</div>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    // paths: [
    //   {
    //     params: {
    //       eventId: "e1",
    //     },
    //   },
    // ],
    paths: paths,
    // fallback: true, // 로딩같은걸로 막고 후에 보여주는
    fallback: "blocking", //화면이 다 나타날때까지 대기했다고 보여주는
  };
}
