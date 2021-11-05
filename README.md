# use-active-heading

> Determine which section a user is reading with IntersectionObservers

[![NPM](https://img.shields.io/npm/v/use-active-heading.svg)](https://www.npmjs.com/package/use-active-heading) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-active-heading
```

## Usage
`useActiveHeading` expects a list of ids of the indivdual headings and optionally Parameter for the IntersectionObserver, that powers the package in the background.

```tsx
import * as React from "react";

import { useActiveHeading } from "use-active-heading";

const Example = () => {
  const activeId = useActiveHeading(["#a", "#b"], {});
  return (
    <>
      <p>ActiveId:{activeId}</p>
      <h1 id="a">A</h1>
      <h2 id="b" style={{ marginTop: "100vh" }}>
        B
      </h2>
    </>
  );
};
```
## Further Reading
See [my blog](https://saller.to/blog/interactive-table-of-contents) for how this was built. (And its inner workings)
## License

MIT © [sallto](https://github.com/sallto)

---

Thanks to [create-react-hook](https://github.com/hermanya/create-react-hook) for making the npm process understandable.
