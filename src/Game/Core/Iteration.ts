/** Inline iterator. instead of having to do a for statement, you can inline this instead, with useful defaults to boot!
 * Also allows for repeating the same element over and over if you need to do that quickly too.
 */
export class Iteration<T> {
  start: number;
  end: number;
  step: number;
  contents: T | undefined;
  constructor(
    end: number,
    contents: T | undefined = undefined,
    start?: number,
    step?: number
  ) {
    this.start = start ?? 0;
    this.end = end;
    this.step = step ?? 1;
    this.contents = contents;
  }

  Iterate(): number[] {
    let res = [];
    for (let i = this.start; i < this.end; i += this.step) res.push(i);
    return res;
  }

  Repeat(): T[] {
    let res: T[] = [];
    if (this.contents === undefined) return res;
    for (let i = this.start; i < this.end; i++) res.push(this.contents);
    return res;
  }
}
