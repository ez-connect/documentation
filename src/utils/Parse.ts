export interface TocItem {
  level: number;
  title: string;
  to?: number;
}

class Parse {
  public toc(value: string): TocItem[] {
    const items: TocItem[] = [];
    const lines = value.split('\n');

    for (const line of lines) {
      let matches = line.match(/(#+)\s+?(.*)/);
      if (!matches || matches.length < 1) {
        continue;
      }

      const level = matches[1].length;
      let title = matches[2];
      let to = undefined;
      matches = title.match(/(.*)\s+#(\d+)/);
      if (matches && matches.length > 1) {
        title = matches[1];
        to = Number.parseInt(matches[2]);
      }

      items.push({
        level,
        title,
        to,
      });
    }
    return items;
  }
}

const singleton = new Parse();
export { singleton as Parse };
