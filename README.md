# Components and Material Design for Angular
[![npm version](https://badge.fury.io/js/%40angular%2Fmaterial.svg)](https://www.npmjs.com/package/%40angular%2Fmaterial)
[![Build status](https://circleci.com/gh/angular/components.svg?style=svg)](https://circleci.com/gh/angular/components)
[![Gitter](https://badges.gitter.im/angular/components.svg)](https://gitter.im/angular/material2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

This is the home for the Angular team's UI components built for and with Angular.
These include Material Design components and the Angular Component Development Kit (CDK).

#### Quick links
[Documentation, demos, and guides][aio] |
[Google group](https://groups.google.com/forum/#!forum/angular-material2) |
[Contributing](https://github.com/angular/components/blob/master/CONTRIBUTING.md) |
[StackBlitz Template](https://stackblitz.com/fork/components-issue)

### Getting started

See our [Getting Started Guide][getting-started]
if you're building your first project with Angular Material.

Check out our [directory of design documents](https://github.com/angular/components/wiki/Design-doc-directory)
for more insight into our process.

If you'd like to contribute, you must follow our [contributing guidelines](https://github.com/angular/components/blob/master/CONTRIBUTING.md).
You can look through the GitHub issues (which should be up-to-date on who is working on which features
and which pieces are blocked) and make a comment.

Please see our [`help wanted`](https://github.com/angular/components/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
label for a list of issues where we could use help from the community.

#### High level stuff planned for Q4 2019 (Oct  - Nov):
* Remove dependency on HammerJS
* Finish remaining test harnesses for Angular Material components
* Continuing to create new, API-compatible versions of the Angular Material components backed by
MDC Web ([see @jelbourn's ng-conf talk](https://youtu.be/4EXQKP-Sihw?t=891)).
* New `@angular/google-maps` package
* New `@angular/cdk/clipboard` subpackage


#### Available features

| Feature          | Notes                                                  | Docs         |
|------------------|--------------------------------------------------------|--------------|
| autocomplete     |                                                        |   [Docs][24] |
| badge            |                                                        |   [Docs][37] |
| bottom-sheet     |                                                        |   [Docs][38] |
| button           |                                                        |   [Docs][1]  |
| button-toggle    |                                                        |   [Docs][15] |
| cards            |                                                        |   [Docs][2]  |
| checkbox         |                                                        |   [Docs][3]  |
| chips            |                                                        |   [Docs][26] |
| data-table       |                                                        |   [Docs][28] |
| datepicker       |                                                        |   [Docs][25] |
| dialog           |                                                        |   [Docs][22] |
| divider          |                                                        |   [Docs][35] |
| drag-drop        |                                                        |   [Docs][39] |
| expansion-panel  |                                                        |   [Docs][32] |
| grid-list        |                                                        |   [Docs][9]  |
| icon             |                                                        |   [Docs][10] |
| input            |                                                        |   [Docs][5]  |
| list             |                                                        |   [Docs][8]  |
| menu             |                                                        |   [Docs][17] |
| paginator        |                                                        |   [Docs][29] |
| progress-bar     |                                                        |   [Docs][12] |
| progress-spinner |                                                        |   [Docs][11] |
| radio            |                                                        |   [Docs][4]  |
| ripples          |                                                        |   [Docs][19] |
| select           |                                                        |   [Docs][23] |
| sidenav          |                                                        |   [Docs][6]  |
| slide-toggle     |                                                        |   [Docs][14] |
| slider           |                                                        |   [Docs][16] |
| snackbar / toast |                                                        |   [Docs][21] |
| sort-header      |                                                        |   [Docs][30] |
| stepper          |                                                        |   [Docs][33] |
| tabs             |                                                        |   [Docs][13] |
| textarea         |                                                        |   [Docs][5]  |
| toolbar          |                                                        |   [Docs][7]  |
| tooltip          |                                                        |   [Docs][18] |
| tree             |                                                        |   [Docs][36] |
| virtual-scroll   |                                                        |   [Docs][40] |
| ---------------- | ------------------------------------------------------ | ------------ |
| theming          |                                                        |  [Guide][20] |
| typography       |                                                        |  [Guide][27] |
| layout           | See [CDK Layout][cdk-layout] or [@angular/flex-layout][lay_rp]| -     |
| cdk              |                                                        |   [Docs][34] |

 [1]: https://material.angular.io/components/button/overview
 [2]: https://material.angular.io/components/card/overview
 [3]: https://material.angular.io/components/checkbox/overview
 [4]: https://material.angular.io/components/radio/overview
 [5]: https://material.angular.io/components/input/overview
 [6]: https://material.angular.io/components/sidenav/overview
 [7]: https://material.angular.io/components/toolbar/overview
 [8]: https://material.angular.io/components/list/overview
 [9]: https://material.angular.io/components/grid-list/overview
[10]: https://material.angular.io/components/icon/overview
[11]: https://material.angular.io/components/progress-spinner/overview
[12]: https://material.angular.io/components/progress-bar/overview
[13]: https://material.angular.io/components/tabs/overview
[14]: https://material.angular.io/components/slide-toggle/overview
[15]: https://material.angular.io/components/button-toggle/overview
[16]: https://material.angular.io/components/slider/overview
[17]: https://material.angular.io/components/menu/overview
[18]: https://material.angular.io/components/tooltip/overview
[19]: https://github.com/angular/components/blob/master/src/material/core/ripple/ripple.md
[20]: https://material.angular.io/guide/theming
[21]: https://material.angular.io/components/snack-bar/overview
[22]: https://material.angular.io/components/dialog/overview
[23]: https://material.angular.io/components/select/overview
[24]: https://material.angular.io/components/autocomplete/overview
[25]: https://material.angular.io/components/datepicker/overview
[26]: https://material.angular.io/components/chips/overview
[27]: https://material.angular.io/guide/typography
[28]: https://material.angular.io/components/table/overview
[29]: https://material.angular.io/components/paginator/overview
[30]: https://material.angular.io/components/sort/overview

[32]: https://material.angular.io/components/expansion/overview
[33]: https://material.angular.io/components/stepper/overview
[34]: https://material.angular.io/cdk/categories
[35]: https://material.angular.io/components/divider/overview
[36]: https://material.angular.io/components/tree/overview
[37]: https://material.angular.io/components/badge/overview
[38]: https://material.angular.io/components/bottom-sheet/overview
[39]: https://material.angular.io/cdk/drag-drop/overview
[40]: https://material.angular.io/cdk/scrolling/overview#virtual-scrolling

[aio]: https://material.angular.io
[getting-started]: https://material.angular.io/guide/getting-started
[lay_rp]:  https://github.com/angular/flex-layout
[cdk-layout]: https://material.angular.io/cdk/layout/overview


## The goal of Angular Material and the CDK
Our goal is to build a set of high-quality UI components built with Angular and TypeScript.
These include foundational components and services, found in the CDK, and components that follow
the Material Design spec. These components serve as an example of how to build Angular UI components
that follow best practices.

### What do we mean by "high-quality"?
* Internationalized and accessible so that all users can use them.
* Straightforward APIs that don't confuse developers.
* Behave as expected across a wide variety of use-cases without bugs.
* Behavior is well-tested with both unit and integration tests.
* Customizable within the bounds of the Material Design specification.
* Performance cost is minimized.
* Code is clean and well-documented to serve as an example for Angular developers.

## Browser and screen reader support
Angular Material supports the most recent two versions of all major browsers:
Chrome (including Android), Firefox, Safari (including iOS), and IE11 / Edge.

We aim for great user experience with the following screen readers:
* **Windows**: NVDA and JAWS with IE11 / FF / Chrome.
* **macOS**: VoiceOver with Safari / Chrome.
* **iOS**: VoiceOver with Safari
* **Android**: Android Accessibility Suite (formerly TalkBack) with Chrome.
* **Chrome OS**: ChromeVox with Chrome.
