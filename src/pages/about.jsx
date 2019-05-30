import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page" />
    <Container>
      <h3>About me what?</h3>
      <p>
        A very long time ago, a future rockstar tech guy born... was not me but{' '}
        <a
          href="https://twitter.com/getify"
          title="go to Kyle Simposon twitter profile"
        >
          Kyle Simpson
        </a>
        ... and after some other time, I manage to arrive in this world and my
        story start from that point in history.
      </p>
      <p>
        I've born in a city called Bari in the south of Italy in a region called
        Puglia. When I was 8 years old, I and my parents decided to move to
        Rimini, because in the small city where we were living, Gravina in
        Puglia, not because there was no work for them but because of the
        internet connection that was not so fast.
      </p>
      <p>
        If you manage to read until this line, well done, you are very
        interested in my life, thank you for that but I'll stop talking about it
        I'm sorry but my biography will be out soon,{' '}
        <a
          href="https://www.linkedin.com/in/nicolantonio-vignola/"
          target="_blank"
          title="Nico Vignola LinkedIn profile"
        >
          let's keep in touch.
        </a>
      </p>
      <p>
        Let's stay focus on what matters. My real name is Nicolantonio but if
        you can't deal with it Nico is more than fine.
      </p>
      <h3>About this blog what?</h3>
      <p>
        Do you know about{' '}
        <a
          href="https://www.troyhunt.com/the-ghost-who-codes-how-anonymity-is/"
          target="_blank"
          title="The Ghost Who Code article"
        >
          the ghost who code
        </a>
        ? Well, that answer the why of this blog mainly. I strongly suggest
        reading that article... strongly.
      </p>
      <p>
        I wasn't aware of coding ghosts and mainly I didn't know that I was one
        of them. Is not only about the career but is more about giving back to
        the community. I don't know too much, I don't have the truth in my hands
        but I'll try to share what I know and especially what I don't know.
      </p>
      <p>
        This blog is also for me, my selfish healthy part. Since I can't retain
        much information in my head I'll put it here.
      </p>
      <p>So that's it, you can go back to whatever brought you here.</p>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
