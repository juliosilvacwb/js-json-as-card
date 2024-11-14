# js-json-as-card
A React component for presenting JSON data within a styled card.

| Field               | Type                | Required | Default        | Description                                                                   |
| ------------------- | ------------------- | -------- | -------------- | ----------------------------------------------------------------------------- |
| id                  | string              | no       | undefined      | Id of the HTML.                                                               |
| json                | object              | yes      | N/A            | JSON for presentation.                                                        |
| format              | boolean             | no       | false          | Format label like `name` => `Name` or `primary_email` => `Primary email`.     |
| styleCard           | React.CSSProperties | no       | CardContainer  | Object style for the card.                                                    |
| styleLabel          | React.CSSProperties | no       | N/A            | Object style for the labels.                                                  |
| styleText           | React.CSSProperties | no       | CardText       | Object style for the text.                                                    |
| complementComponent | React.ReactNode     | no       | N/A            | Object style for the text.                                                    |

```js
const CardContainer = styled.div`
  position: relative;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 16px;
  font-family: Arial, sans-serif;
`;
```

```js
const CardText = styled.div`
  margin-left: 0.5rem;
`;
```

### Example

```js

    const user = {
            name: 'Julio Silva',
            email: 'julio@email.com',
            phone: '+55 11 99999-9999'
        }

    <CardJson json={user}/>
```

![Example](./public/default.png)

```js

    const user = {
            name: 'Julio Silva',
            email: 'julio@email.com',
            phone: '+55 11 99999-9999'
        }

    <CardJson {...args} 
        id="user"
        styleCard={{
            backgroundColor: "#E1F5FE", 
            fontFamily: "Arial, sans-serif",
            borderRadius: 0,
            boxShadow: 'none'
        }} 
        styleLabel={{
            width: '50px',
            border: '1px'
        }}
        styleText={{
            marginLeft: '1rem'
        }}
        format={true}
        complementComponent={
            <div style={{ padding: '10px 0'}}>
            <Button onClick={() => alert('Click') }>
                Open
                </Button>
            </div>
        }
    />
```

![Example](./public/styled.png)


```js

    const user = {
            "Name": 'Julio Silva',
            "E-mail": 'julio@email.com',
            "Phone": '+55 11 99999-9999'
        }

    <CardJson json={user}/>
```

![Example](./public/customJson.png)