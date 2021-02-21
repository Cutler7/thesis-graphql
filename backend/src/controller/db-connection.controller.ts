import {Db, MongoClient} from 'mongodb';
import {Subject, Subscription} from 'rxjs';

export class DbConnectionController {

  private connection: Db;
  private mongoClient: MongoClient;
  private dbConnectionReadySubject = new Subject<void>();
  private subscriptions: Subscription[] = [];
  private readonly url = 'mongodb://172.18.148.168:27017';
  private readonly dbName = 'ACME_DB';

  constructor() {
    this.openConnection();
    this.closeConnectionOnExit();
    this.getDb.bind(this);
  }

  whenReady(cb: () => void): void {
    const subscription = this.dbConnectionReadySubject.subscribe(cb);
    this.subscriptions.push(subscription);
  }

  public getDb(): Db {
    return this.connection;
  }

  private openConnection(): void {
    MongoClient.connect(this.url, {useUnifiedTopology: true})
      .then((client: MongoClient) => {
        this.mongoClient = client;
        this.connection = client.db(this.dbName);
        this.dbConnectionReadySubject.next();
      });
  }

  private closeConnectionOnExit(): void {
    process.on('SIGINT', () => this.cleanup());
    process.on('SIGTERM', () => this.cleanup());
  };

  private cleanup() {
    this.mongoClient.close();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
