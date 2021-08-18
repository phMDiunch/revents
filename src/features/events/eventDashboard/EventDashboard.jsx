import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm.jsx";
import EventList from "./EventList.jsx";
import { sampleData } from "../../../app/api/sampleData.js";

export default function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
}
