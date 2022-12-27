## Wikipedia Search App

<img width="677" alt="WikiApp" src="https://user-images.githubusercontent.com/6617264/209621748-07589876-5522-4608-8707-d7b0436d4652.png">

### Search Beatles example

![Wikipedia_TheBeatles](https://user-images.githubusercontent.com/6617264/209621850-671a610f-c503-4046-825a-540a2f9a6e44.png)


#### HTML Structure
- section.wiki
  - div.container
    - img
    - h3(text)
    - form.form
      - input.form-input type='text'
      - button.submit-btn (search) type='submit'
  - div.results
    - div.articles
      - a
        - h4
        - p (lorem20)

#### API DOCS

- [wiki docs](https://www.mediawiki.org/wiki/API:Main_page)

- ready to go url's

#### Initial Setup

- select form, input, results
- listen for submit events
- if empty value, display error
- create fetchPages()
- pass valid input value into the fetchPages()

#### Fetch Pages

- display loading while fetching
- construct dynamic url
- display if error
- display error no items
- create renderResults()
- pass valid results into renderResults()

#### Render Results

- iterate over the list
- pull out title, snippet, pageid
- setup a card
- set results with div.articles and list inside
