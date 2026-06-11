export const mongodbQuestions = [
  {
    id: 301,
    slug: "what-is-mongodb",
    title: "What is MongoDB?",
    category: "MongoDB",
    answer: "MongoDB is a source-available, NoSQL document database designed for high availability, horizontal scaling, and flexibility. It stores data in flexible, JSON-like documents rather than traditional tables and rows."
  },
  {
    id: 302,
    slug: "what-is-bson",
    title: "What is BSON?",
    category: "MongoDB",
    answer: "BSON stands for Binary JSON. It is the binary-encoded serialization format MongoDB uses to store documents and make remote procedure calls. It extends JSON to support additional data types like Date, ObjectId, and Binary data."
  },
  {
    id: 303,
    slug: "difference-between-sql-and-nosql",
    title: "Difference between SQL and NoSQL?",
    category: "MongoDB",
    answer: "SQL databases are relational, table-based, use structured schemas, and scale vertically. NoSQL databases like MongoDB are non-relational, document-based, use dynamic schemas for unstructured data, and scale horizontally using sharding."
  },
  {
    id: 304,
    slug: "what-is-an-objectid-in-mongodb",
    title: "What is an ObjectId in MongoDB?",
    category: "MongoDB",
    answer: "An ObjectId is a unique 12-byte identifier automatically generated as the primary key (`_id`) for every document. It consists of a 4-byte timestamp, a 5-byte random value unique to the machine and process, and a 3-byte incrementing counter."
  },
  {
    id: 305,
    slug: "what-is-a-collection-and-a-document",
    title: "What is a Collection and a Document?",
    category: "MongoDB",
    answer: "A Document is the basic unit of data in MongoDB, analogous to a row in an RDBMS. A Collection is a grouping of these documents, which is equivalent to a table in a relational database."
  },
  {
    id: 306,
    slug: "what-is-the-purpose-of-the-aggregation-framework",
    title: "What is the Aggregation Framework?",
    category: "MongoDB",
    answer: "The Aggregation Framework is a pipeline-based data processing framework in MongoDB. It allows you to filter, transform, group, and compute values from documents across collections using sequences of stages like $match, $group, and $project."
  },
  {
    id: 307,
    slug: "what-is-sharding-in-mongodb",
    title: "What is Sharding?",
    category: "MongoDB",
    answer: "Sharding is the process of storing data records across multiple machines or clusters. It is MongoDB’s approach to horizontal scaling, allowing it to support massive datasets and high-throughput operations by distributing the load."
  },
  {
    id: 308,
    slug: "what-is-a-replica-set",
    title: "What is a Replica Set?",
    category: "MongoDB",
    answer: "A replica set is a group of mongodb processes that maintain the same data set. It consists of one Primary node (which receives all write operations) and multiple Secondary nodes (which replicate data from the primary) to ensure high availability and automatic failover."
  },
  {
    id: 309,
    slug: "what-are-indexes-and-why-are-they-used",
    title: "What are Indexes in MongoDB?",
    category: "MongoDB",
    answer: "Indexes are special data structures (typically B-trees) that store a small portion of the collection's data set in an easy-to-traverse form. They drastically improve query performance by avoiding expensive full-collection scans."
  },
  {
    id: 310,
    slug: "what-is-a-compound-index",
    title: "What is a Compound Index?",
    category: "MongoDB",
    answer: "A compound index is an index structures formed by indexing multiple fields within a single collection document. The order of fields in a compound index matters significantly for matching specific queries."
  },
  {
    id: 311,
    slug: "what-is-a-text-index",
    title: "What is a Text Index?",
    category: "MongoDB",
    answer: "A text index supports string content searches inside collections. It tokenizes words, stems them, and filters out stop words to enable full-text search capabilities across targeted document string fields."
  },
  {
    id: 312,
    slug: "what-is-the-difference-between-embedded-and-referenced-documents",
    title: "Difference between Embedded and Referenced documents?",
    category: "MongoDB",
    answer: "Embedded documents (denormalization) store related data directly inside a single document structure, which optimizes read operations. Referenced documents (normalization) store data in separate collections and use pointers/links, minimizing data duplication."
  },
  {
    id: 313,
    slug: "what-is-capped-collection",
    title: "What is a Capped Collection?",
    category: "MongoDB",
    answer: "Capped collections are fixed-size circular collections that maintain insertion order. Once a capped collection fills its allocated space, it automatically overwrites its oldest documents to make room for new ones, making them ideal for logging."
  },
  {
    id: 314,
    slug: "what-is-the-lookup-stage-in-aggregation",
    title: "What is the $lookup stage in aggregation?",
    category: "MongoDB",
    answer: "The $lookup stage performs a left outer join to another collection within the same database, pulling data from the joined collection into target arrays within the input documents."
  },
  {
    id: 315,
    slug: "what-is-the-purpose-of-the-explain-method",
    title: "What is the purpose of the explain() method?",
    category: "MongoDB",
    answer: "The explain() method provides detailed performance metrics about how MongoDB executed a query. It reports whether an index was utilized (IXSCAN) or if a full collection scan occurred (COLLSCAN), helping optimize queries."
  },
  {
    id: 316,
    slug: "does-mongodb-support-transactions",
    title: "Does MongoDB support ACID transactions?",
    category: "MongoDB",
    answer: "Yes, MongoDB supports multi-document ACID transactions across replica sets and sharded clusters. This guarantees that operations on multiple documents either succeed entirely or fail completely, maintaining total consistency."
  },
  {
    id: 317,
    slug: "what-is-the-wiredtiger-storage-engine",
    title: "What is the WiredTiger storage engine?",
    category: "MongoDB",
    answer: "WiredTiger is the default pluggable storage engine for MongoDB. It handles memory caching, document-level concurrency control, disk compression, and checkpointing configurations to deliver optimal performance and durability."
  },
  {
    id: 318,
    slug: "what-is-journaling-in-mongodb",
    title: "What is Journaling in MongoDB?",
    category: "MongoDB",
    answer: "Journaling is a write-ahead log logging mechanism used by WiredTiger to guarantee write durability. MongoDB records all write modifications to an on-disk journal before applying them to data files, allowing recovery in a crash event."
  },
  {
    id: 319,
    slug: "what-is-the-difference-between-save-and-insert",
    title: "Difference between insert() and save()?",
    category: "MongoDB",
    answer: "insert() strictly adds a new document to a collection; if a document with that `_id` already exists, it throws an error. save() behaves as an upsert: if the `_id` exists, it overwrites/updates the document; otherwise, it inserts a new one."
  },
  {
    id: 320,
    slug: "what-is-the-primary-node-election-process",
    title: "How does Replica Set Primary Election work?",
    category: "MongoDB",
    answer: "If a primary node becomes unreachable, the secondary nodes initiate an election process. They vote among themselves to choose a new primary based on priority configuration, networking latency, and which secondary has the most up-to-date data sync."
  },
  {
    id: 321,
    slug: "what-is-a-ttl-index-time-to-live",
    title: "What is a TTL (Time-To-Live) Index?",
    category: "MongoDB",
    answer: "A TTL index is a single-field index that automatically deletes documents from a collection after a specific duration or at a precise clock timestamp. It is commonly used for managing user sessions or expiring system logs."
  },
  {
    id: 322,
    slug: "what-is-gridfs",
    title: "What is GridFS?",
    category: "MongoDB",
    answer: "GridFS is a built-in specification for storing and retrieving files that exceed the BSON document size limit of 16MB. It achieves this by splitting large files into multiple smaller chunks and storing them inside two dedicated collections."
  },
  {
    id: 323,
    slug: "what-is-the-maximum-document-size-in-mongodb",
    title: "What is the maximum document size in MongoDB?",
    category: "MongoDB",
    answer: "The maximum size for a single BSON document in MongoDB is 16 megabytes. This upper bound is enforced to prevent individual documents from consuming excessive RAM resources or causing high network overhead during transfers."
  },
  {
    id: 324,
    slug: "what-is-data-normalization-and-denormalization-in-mongodb",
    title: "What is Data Normalization vs Denormalization?",
    category: "MongoDB",
    answer: "Normalization links distinct pieces of data across multiple collections using manual pointers or references. Denormalization optimizes for heavy reading by nesting and storing all relevant information inside a single parent document."
  },
  {
    id: 325,
    slug: "what-is-the-difference-between-mongodb-and-redis",
    title: "Difference between MongoDB and Redis?",
    category: "MongoDB",
    answer: "MongoDB is an on-disk document database built to handle persistent, deeply nested JSON data structures. Redis is an ultra-fast, in-memory key-value data structure store primarily used as a caching mechanism or transient message broker."
  },
  {
    id: 326,
    slug: "what-is-the-role-of-an-arbiter-in-a-replica-set",
    title: "What is the role of an Arbiter in a Replica Set?",
    category: "MongoDB",
    answer: "An Arbiter is a replica set member that does not store any data and cannot become a primary node. Its sole responsibility is to participate in primary node elections to break ties if the group has an even number of voting members."
  },
  {
    id: 327,
    slug: "what-is-a-partial-index",
    title: "What is a Partial Index?",
    category: "MongoDB",
    answer: "A partial index indexes only the documents in a collection that meet a specified filter expression criterion. By indexing a subset of documents, partial indexes reduce storage overhead and index maintenance costs."
  },
  {
    id: 328,
    slug: "what-is-a-sparse-index",
    title: "What is a Sparse Index?",
    category: "MongoDB",
    answer: "A sparse index only includes entries for documents that actually contain the indexed field. Documents missing the field are skipped entirely, saving substantial storage space when dealing with highly inconsistent, optional fields."
  },
  {
    id: 329,
    slug: "what-are-write-concerns-in-mongodb",
    title: "What are Write Concerns in MongoDB?",
    category: "MongoDB",
    answer: "Write concern describes the level of acknowledgment requested from MongoDB when writing data. For example, `w: 1` requests acknowledgment from the primary node only, while `w: majority` requires data to be committed to a majority of replica nodes."
  },
  {
    id: 330,
    slug: "what-are-read-preferences-in-mongodb",
    title: "What are Read Preferences?",
    category: "MongoDB",
    answer: "Read preferences dictate how MongoDB routing drivers direct read queries to various members of a replica set. Options include reading exclusively from the 'primary' node, or offloading reads to 'secondary' nodes to reduce primary workload."
  },
  {
    id: 331,
    slug: "what-is-the-purpose-of-the-set-operator",
    title: "What is the purpose of the $set operator?",
    category: "MongoDB",
    answer: "The `$set` operator updates the specific value of an indicated field within a document without overwriting the entire document body. If the field does not exist, `$set` will automatically create it."
  },
  {
    id: 332,
    slug: "what-is-the-difference-between-the-push-and-addtoset-operators",
    title: "Difference between $push and $addToSet operators?",
    category: "MongoDB",
    answer: "The `$push` operator appends a specified value directly to the end of a targeted array field, regardless of duplicates. The `$addToSet` operator adds a value only if it does not already exist in the array, treating it like a unique set."
  },
  {
    id: 333,
    slug: "what-is-the-purpose-of-the-facet-stage-in-aggregation",
    title: "What is the $facet stage in aggregation pipelines?",
    category: "MongoDB",
    answer: "The `$facet` stage allows you to execute multiple parallel aggregation pipelines within a single stage on the same input documents. It is highly effective for generating complex multi-dimensional dashboards or faceted navigational structures."
  },
  {
    id: 334,
    slug: "what-is-mongoose-and-why-is-it-used",
    title: "What is Mongoose?",
    category: "MongoDB",
    answer: "Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a structured, schema-based solution to model application data, enforcing validation, hook middleware, and type casting at the application layer."
  },
  {
    id: 335,
    slug: "what-are-change-streams-in-mongodb",
    title: "What are Change Streams?",
    category: "MongoDB",
    answer: "Change streams allow applications to access real-time data changes across databases or collections without the complexity of tailing the internal replication oplog. Applications can subscribe to them to listen for instant insertions, updates, or deletions."
  }
];