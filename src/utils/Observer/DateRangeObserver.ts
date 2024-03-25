import { Dayjs } from "dayjs";

interface DateRangeObserver {
  update(startDate: Dayjs | null, endDate: Dayjs | null): void;
}

class DateRangeSubject {
  private observers: DateRangeObserver[] = [];

  addObserver(observer: DateRangeObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: DateRangeObserver): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyObservers(startDate: Dayjs | null, endDate: Dayjs | null): void {
    this.observers.forEach((observer) => observer.update(startDate, endDate));
  }
}

export { DateRangeSubject };
export type { DateRangeObserver };
