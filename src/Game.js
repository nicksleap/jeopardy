import React from 'react'
import SubjectList from './components/subjectList'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subjects: [
        {
          "title": "<Error: You must call a tag with ()>",
          "questions": [
            {
              "points": 100,
              "question": "28dd43f6-eaf5-42e8-b0d1-867c1d180e8a"
            },
            {
              "points": 200,
              "question": "c942a299-6ca3-4be2-bb42-7d5ab53403d8"
            },
            {
              "points": 300,
              "question": "ba4c54c5-976d-41c1-88a7-4c24a00c7edd"
            },
            {
              "points": 400,
              "question": "5560c617-5446-4908-b92e-6cae9a7e9e11"
            },
            {
              "points": 500,
              "question": "c18773f3-20ea-4040-9d9c-45fb181c7817"
            }
          ]
        },
        {
          "title": "<Error: You must call a tag with ()>",
          "questions": [
            {
              "points": 100,
              "question": "87d8356e-5288-45c1-a4fb-e0ecfa4a9810"
            },
            {
              "points": 200,
              "question": "bff73a02-a946-488f-8ab8-2494c7819586"
            },
            {
              "points": 300,
              "question": "6f9c1f5b-74bb-4ca8-99d3-c841ded709a1"
            },
            {
              "points": 400,
              "question": "be46ee29-201b-40e6-bd6b-775c003100aa"
            },
            {
              "points": 500,
              "question": "90b49c56-7b54-41eb-a26d-a30e0fb71eef"
            }
          ]
        },
        {
          "title": "<Error: You must call a tag with ()>",
          "questions": [
            {
              "points": 100,
              "question": "2c9b8779-085e-46ae-ac42-dad6760e2acf"
            },
            {
              "points": 200,
              "question": "66ca21d8-0f44-4595-9e27-48bbf61ca561"
            },
            {
              "points": 300,
              "question": "d5dd3049-c491-4995-a24e-b4366535a793"
            },
            {
              "points": 400,
              "question": "706a5f4d-3983-45b2-b6ee-3428891aae87"
            },
            {
              "points": 500,
              "question": "2dbcc773-4867-4817-abca-dc8db766a9d4"
            }
          ]
        },
        {
          "title": "<Error: You must call a tag with ()>",
          "questions": [
            {
              "points": 100,
              "question": "27f17d46-b859-4f80-8726-fff381788731"
            },
            {
              "points": 200,
              "question": "f940fd6c-cb2f-4b05-90e5-1ff575037986"
            },
            {
              "points": 300,
              "question": "3b82fdeb-e8cd-483a-b94a-1bb74a247dcb"
            },
            {
              "points": 400,
              "question": "892c74ee-e9e4-43a0-9741-44c6ad2821e1"
            },
            {
              "points": 500,
              "question": "f07ce83d-1bc8-4605-b780-59a6f890e838"
            }
          ]
        },
        {
          "title": "<Error: You must call a tag with ()>",
          "questions": [
            {
              "points": 100,
              "question": "df552e47-6203-441c-8e7f-e216543a9603"
            },
            {
              "points": 200,
              "question": "a7f90bc8-d278-4e44-b2d3-8ab183990ef6"
            },
            {
              "points": 300,
              "question": "9ecb8d91-c88b-4326-a92c-0e27abec63ea"
            },
            {
              "points": 400,
              "question": "1b8e0999-4326-4327-bfa4-aa2eca067f5d"
            },
            {
              "points": 500,
              "question": "9f580690-dc1a-4903-9e8a-3cbcc364875f"
            }
          ]
        }
      ]
    }
  }
  render() {
    return (
      <SubjectList />
    )
  }
}

export default Game;
