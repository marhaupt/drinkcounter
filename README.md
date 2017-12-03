## Surge to deploy

1. install globally `npm install --global surge`
2. `cd build` and `surge`
3. setup
4. `echo https://drinkcounter.surge.sh > CNAME` in `public` folder, this forces https and remembers domain
5. [optional] change build task to `"build": "react-scripts build && surge build"`

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
