import React from 'react';
import Layout from '@theme/Layout';

import Grid from "@site/src/components/Grid/Grid.tsx";
import GridBlock from "@site/src/components/GridBlock/GridBlock.tsx";

import styles from  './styles.module.scss';

export default function Home() {
  return (
    <Layout title="SUAVE" description="SUAVE home page - an introduction to the future of coordination">
      <div className={styles.container}>
        <div className={styles.headingContainer}>
            <p className={styles.mainHeading}>
              SUAVE
            </p>
            <p className={styles.subHeading}>
              Unified Coordination
            </p>
        </div>
      </div>
      <div className={styles.explainContainer}>
        <p className={styles.explainHeading}>
          SUAVE — the Single Unified Auction for Value Expression
        </p>
        <Grid>
          <GridBlock symbol="I." title="Unified">
          SUAVE is a <b>shared sequencing layer</b> for any network or product that is exposed to MEV.
          </GridBlock>
          <GridBlock symbol="II." title="Decentralized">
          SUAVE is an <b>open marketplace</b> for decentralized block building.
          </GridBlock>
          <GridBlock symbol="III." title="Permissionless">
          SUAVE <b>enables anyone</b> to create orderflow auctions and block building applications.
          </GridBlock>
        </Grid>
      </div>
      <div className={styles.explainContainer}>
        <p className={styles.explainHeading}>
          SUAVE — Shared Sequencing for Everyone
        </p>
        <p>Using SUAVE as the shared sequencing layer for any network or service that is exposed to MEV unlocks the following benefits:</p>
        <Grid>
          <GridBlock symbol="I." title="For blockchains">
          Maximally decentralized sequencing. Maximal neutral network resilience.
          </GridBlock>
          <GridBlock symbol="II." title="For validators">
          Maximum revenue on your blockspace.
          </GridBlock>
          <GridBlock symbol="III." title="For builders/searchers">
          Open access to user and searcher transactions. Express complex preferences. Cross-chain coordination.
          </GridBlock>
          <GridBlock symbol="IV." title="For users">
          Transact privately, with the best execution and the minimum possible fees.
          </GridBlock>
        </Grid>
      </div>
      <div className={styles.explainContainer}>
        <p className={styles.explainHeading}>
          SUAVE — Coordinating Coordination
        </p>
        <Grid>
          <GridBlock symbol="I." title="Conviction">
          We are convinced that the value to be unlocked through coopetition in MEV is monumental.
          </GridBlock>
          <GridBlock symbol="II." title="Belief">
          We believe that that we can align the best possible execution with the most decentralized infrastructure.
          </GridBlock>
          <GridBlock symbol="III." title="Commitment">
          We commit to preserving decentralization and respecting the preferences of every user and domain that MEV effects.
          </GridBlock>
        </Grid>
      </div>
    </Layout>
  );
}