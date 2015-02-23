declare module Chance {

    interface ChanceStatic {
        Chance(): Chance;
        new(): Chance;
        new(seed: number): Chance;
        new(generator: () => any): Chance;
    }

    interface Chance {

        // Basics
        bool(opts?: Options): boolean;
        character(opts?: Options): string;
        floating(opts?: Options): number;
        integer(opts?: Options): number;
        natural(opts?: Options): number;
        string(opts?: Options): string;

        // Text
        paragraph(opts?: Options): string;
        sentence(opts?: Options): string;
        syllable(opts?: Options): string;
        word(opts?: Options): string;

        // Person
        age(opts?: Options): number;
        birthday(): Date;
        birthday(opts?: Options): Date|string;
        cpf(): string;
        first(opts?: Options): string;
        last(opts?: Options): string;
        name(opts?: Options): string;
        name_prefix(opts?: Options): string;
        name_suffix(opts?: Options): string;
        prefix(opts?: Options): string;
        ssn(opts?: Options): string;
        suffix(opts?: Options): string;

        // Mobile
        android_id(): string;
        apple_token(): string;
        bb_pin(): string;
        wp7_anid(): string;
        wp8_anid2(): string;

        // Web
        color(opts?: Options): string;
        domain(opts?: Options): string;
        email(opts?: Options): string;
        fbid(): string;
        google_analytics(): string;
        hashtag(): string;
        ip(): string;
        ipv6(): string;
        klout(): string;
        tld(): string;
        twitter(): string;
        url(opts?: Options): string;

        // Location

        // Time
        ampm(): string;
        date(): Date;
        date(opts: DateOptions): Date|string;
        hammertime(): number;
        hour(opts?: Options): number;
        millisecond(): number;
        minute(): number;
        month(): string;
        month(opts: Options): Month;
        second(): number;
        timestamp(): number;
        year(opts?: Options): string;

        // Helpers
        capitalize(str: string): string;
        mixin(desc: MixinDescriptor): any;
        pad(num: number, width: number, padChar?: string): string;
        pick<T>(arr: T[]): T;
        pick<T>(arr: T[], count: number): T[];
        set: Setter;
        shuffle<T>(arr: T[]): T[];

        // Miscellaneous
        n<T>(generator: () => T, count: number, opts?: Options);
    }

    // A more rigorous approach might be to produce
    // the correct options interfaces for each method
    interface Options { [id: string]: any; }

    interface DateOptions {
        string?: boolean;
        american?: boolean;
        year?: number;
        month?: number;
        day?: number;
    }

    interface Month {
        name: string;
        short_name: string;
        numeric: string;
    }

    interface MixinDescriptor { [id: string]: () => any; }

    interface Setter {
        (key: 'firstNames', values: string[]): any;
        (key: 'lastNames', values: string[]): any;
        (key: 'provinces', values: string[]): any;
        (key: 'us_states_and_dc', values: string[]): any;
        (key: 'territories', values: string[]): any;
        (key: 'armed_forces', values: string[]): any;
        (key: 'street_suffixes', values: string[]): any;
        (key: 'months', values: string[]): any;
        (key: 'cc_types', values: string[]): any;
        (key: 'currency_types', values: string[]): any;
        <T>(key: string, values: T[]): any;
    }
}

// window.chance
declare var chance: Chance.Chance;

// import Chance = require('chance');
declare var importChance: Chance.ChanceStatic;
declare module 'chance' {
    export = importChance;
}
