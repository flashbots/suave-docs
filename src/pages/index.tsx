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
              Build Better Mechanisms
            </p>
            <div className={styles.buttonContainer}>
              <a href="/welcome" className={styles.mainButton}>
                <p>Get started</p>
              </a>
            </div>
        </div>
      </div>
      <div className={styles.explainContainer}>
        <p className={styles.explainHeading}>
          Single Unified Auction for Value Expression
        </p>
        <div className={styles.cardContainer}>
          <a href="/how-to" className={styles.rainbowCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
              <div className={styles.permissionless}></div>
              </div>
              <p className={styles.cardHeading}>
                PERMISSIONLESS
              </p>
              <p className={styles.cardText}>
              SUAVE enables anyone to create orderflow auctions and block building applications.
              </p>
            </div>
          </a>
          <a href="/reference" className={styles.rainbowCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
              <div className={styles.decentralized}></div>
              </div>
              <p className={styles.cardHeading}>
                DECENTRALIZED
              </p>
              <p className={styles.cardText}>
              SUAVE is an open marketplace for decentralized block building.
              </p>
            </div>
          </a>
          <a href="/understand" className={styles.rainbowCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
                <div className={styles.unified}></div>
              </div>
              <p className={styles.cardHeading}>
                UNIFIED
              </p>
              <p className={styles.cardText}>
                SUAVE is a shared sequencing layer for any network or product that is exposed to MEV.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.explainContainer}>
        <p className={styles.explainHeading}>
          Better Outcomes for Everyone
        </p>
        <div className={styles.cardContainer}>
        <a href="/design-goals" className={styles.rainbowCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
              <div className={styles.humans}></div>
              </div>
              <p className={styles.cardHeading}>
                HUMANS
              </p>
              <p className={styles.cardText}>
              Transact privately, with the best execution and the minimum fees.
              </p>
            </div>
          </a>
          <a href="/reference/builder-solidity" className={styles.rainbowCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
              <div className={styles.validators}></div>
              </div>
              <p className={styles.cardHeading}>
                VALIDATORS
              </p>
              <p className={styles.cardText}>
                Maximum revenue for your blockspace, cross-chain opportunities.
              </p>
            </div>
          </a>
          <a href="/reference/builder-solidity" className={styles.rainbowCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
              <div className={styles.builders}></div>
              </div>
              <p className={styles.cardHeading}>
                BUILDERS
              </p>
              <p className={styles.cardText}>
                Optimal access, complex preferences, cross-chain coordination.
              </p>
            </div>
          </a>
          <a href="/understand" className={styles.rainbowCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardImage}>
              <div className={styles.blockchains}></div>
              </div>
              <p className={styles.cardHeading}>
                BLOCKCHAINS
              </p>
              <p className={styles.cardText}>
                Maximally decentralized sequencing. Maximally neutral network resilience.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.gap}></div>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
            <p className={styles.mainHeading}>
              Are you ready?
            </p>
            <p className={styles.subHeading}>
              Build better mechanisms
            </p>
            <div className={styles.buttonContainer}>
              <a href="/welcome" className={styles.mainButton}>
                <p>Get started</p>
              </a>
            </div>
        </div>
      </div>
    </Layout>
  );
}