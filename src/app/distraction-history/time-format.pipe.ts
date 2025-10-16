import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string | number | null | undefined): string {
    if (value == null || value === '') return '-';

    let seconds: number;

    if (typeof value === 'number') {
      seconds = value;
    }
    else if (!isNaN(Number(value))) {
      seconds = Number(value);
    }
    else if (typeof value === 'string' && value.includes(':')) {
      const parts = value.split(':').map(Number);
      if (parts.length === 3) {
        const [hours, mins, secs] = parts;
        seconds = hours * 3600 + mins * 60 + secs;
      } else {
        return value;
      }
    } else {
      return value;
    }

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }
}
