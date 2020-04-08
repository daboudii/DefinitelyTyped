import { Coordinate } from './coordinate';
import { EventsKey } from './events';
import BaseEvent from './events/Event';
import Polygon from './geom/Polygon';
import BaseObject, { ObjectEvent } from './Object';
import { ProjectionLike } from './proj';
import Projection from './proj/Projection';

export interface Options {
    tracking?: boolean;
    trackingOptions?: PositionOptions;
    projection?: ProjectionLike;
}
export default class Geolocation extends BaseObject {
    constructor(opt_options?: Options);
    getAccuracy(): number;
    getAccuracyGeometry(): Polygon;
    getAltitude(): number;
    getAltitudeAccuracy(): number;
    getHeading(): number;
    getPosition(): Coordinate;
    getProjection(): Projection;
    getSpeed(): number;
    getTracking(): boolean;
    getTrackingOptions(): PositionOptions;
    setProjection(projection: ProjectionLike): void;
    setTracking(tracking: boolean): void;
    setTrackingOptions(options: PositionOptions): void;
    on(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => void): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => void): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:accuracy', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:accuracyGeometry', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:altitude', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:altitude', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:altitude', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:altitudeAccuracy', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:heading', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:heading', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:heading', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:position', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:projection', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:projection', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:speed', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:speed', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:speed', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:tracking', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:tracking', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:tracking', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:trackingOptions', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: GeolocationError) => void): EventsKey;
    once(type: 'error', listener: (evt: GeolocationError) => void): EventsKey;
    un(type: 'error', listener: (evt: GeolocationError) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}

export class GeolocationError extends BaseEvent {
    constructor(type: string);
    code: number;
    message: string;
}
