# TODO

## setup

- choose docs framework that still works and builds pages inside of <https://escuela.dev>

## Main Navigation

- Left collapsible Sidebar
- Displays the current course Modules, if at a Course level
- if in a Module, display the chapters, highlighting the current one

- for each link on the initial overview chapter to each other chapters, generate a link when rendering the markdown (__link__)

Example `__ch-3__` means to current module's chapter 3 - same language
Example `__ch-03__` means to current module's chapter 3 - same language
Example `__ch-3__en__` means to current module's chapter 3 - EN language
Example `__ch-3__es__` means to current module's chapter 3 - ES language
Example `__mo-fwdf__` means to first chapter of `fwdf` (Frontend web developer foundations) module
Example `__co-wd101__` means to first chapter of `wd101` Web Development 101 course's first module
Example `__co-wd101__mo-2__` means to second module of `wd101` Web Development 101 course

- check for broken links
- if a link has an external link, add a small arrow up-right icon on the top right
- Add login system. Google, GitHub
- Add payment system. Subscription model DYI self-served. Or with Mentorship and get access to all content during the period of the course.
- (later) A link to download the source of the completed courses will be on the Profile page at all times. Todo keep track of completed / started courses.

### Course progression

- Keep track of 'completed' modules and chapters by a checkbox Button at the buttom of each chapter.
- On the left Sidebar display a checked box icon if completed
- You can complete any chapter at any point. There is no mandatory order or previous requirement.
- To show a completed module all its chapters must be completed and the assesments completed or submitted (a link + text).

## Localization

- Changing locale at the top of the site makes you stay on the same page of the course but in the other language. Just like
