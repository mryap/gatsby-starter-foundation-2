---
template: blog-post
title: What I learnt today about Google Cloud Platform
slug: /what-i-learnt-today-about-google-cloud-platform
date: 2019-05-28 22:21
description: Getting started in BigQuery can be overwhelming. You need to have
  experience with sql query, there are platform-specific nuances that might trip
  you up. You also need to be comfortable working with web analytics data
  outside the Google Analytics interface.
---
BigQuery is Google's data warehouse service, dedicated to managing and querying large datasets. 


As BigQuery is one of many Google Cloud Platform products, here are some great benefit to organisations:
    1. Serverless. No need to download data to your machine in order to work with it - the dataset will remain on the cloud. 
    2. Ease of use. Run ad-hoc SQL queries on your dataset without having to prepare the data, like indexes, beforehand. This is invaluable for data exploration. 
    3. Scale. Carry out data exploration on extremely large datasets interactively. You don't need to sample the data in order to work with it in a timely manner.
     4. Shareability. You will be able to run queries on data from different datasets without any issues. BigQuery is a convenient way to share datasets. Of course, you can also keep your data private, or share them only with specific persons -- not all data need to be public. 


BigQuery charges for storing data, streaming inserts, and querying data. Loading and exporting data are free of charge.

Getting started in BigQuery can be overwhelming. You need to have experience with sql query, there are platform-specific nuances that might trip you up. You also need to be comfortable working with web analytics data outside the Google Analytics interface.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jo2orj7r92jgka1cxqzb.png)

### Data Ingestion

To ingest data into BigQuery, you can use an 
- EL pipeline (used for periodic loads of log files), 
- ETL pipeline (used when data needs to be enriched or quality controlled), 
- ELT pipeline (used for exploratory work)

### Data Processing Tasks

Piping Cloud Pub/Sub messages to BigQuery or bulk-compressing files in Cloud Storage are common data processing tasks perform in GCP.

As pipeline templates are simply stored in Cloud Storage buckets, they can be made publicly available for use across organizations and teams.

Google provides ready-made templates for several of these common processing tasks, your teams can accomplish these common tasks without ever developing a pipeline.

### Interacting with BigQuery

You access BigQuery through the
- Google Cloud Platform Console (via a browser),
- Command-line tool, or
- Making calls to the BigQuery REST API using client libraries such as Java, .NET, or Python.

There are also a variety of third-party tools that you can use to interact with BigQuery, such as visualizing the data or loading the data.

Using the BigQuery web UI in the GCP Console as a visual interface to complete tasks like running queries, loading data, and exporting data is the most common way to use BigQuery


### “External Table” in BigQuery 

External Tables are used to query data that you don’t want to import into BigQuery and remain in an external source such as Google Cloud Storage, Google Drive, BigTable.

Since External tables in BigQuery reference data from an external source, an explicit BigQuery schema cannot be specified for an external table. The format of the external source defines the schema for the table. 

https://cloud.google.com/bigquery/external-data-sources