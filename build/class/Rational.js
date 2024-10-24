"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
class Rational {
    // todo: ...
    numerator;
    denominator;
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.normalize();
    }
    getNumerator() {
        return this.numerator;
    }
    getDenominator() {
        return this.denominator;
    }
    normalize() {
        let gcd = 0;
        for (let i = 1; i <= this.numerator && i <= this.denominator; i++) {
            if (this.numerator % i == 0 && this.denominator % i == 0) {
                gcd = i;
            }
        }
        this.numerator /= gcd;
        this.denominator /= gcd;
        if (this.denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }
        return this;
    }
    isWhole() {
        return this.denominator == 1 || this.numerator % this.denominator == 0;
    }
    isDecimal() {
        return !this.isWhole();
    }
    equals(r) {
        return this.numerator == r.getNumerator() && this.denominator == r.getDenominator();
    }
    static _parseRational(numChars, denomChars) {
        const num = parseInt(numChars.join(''), 10);
        const denom = parseInt(denomChars.join(''), 10);
        return new Rational(num, denom);
    }
    static parseRational(str) {
        const parts = str.split("/");
        const num = parseInt(parts[0]);
        const denom = parseInt(parts[1]);
        return new Rational(num, denom);
    }
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}
exports.Rational = Rational;
