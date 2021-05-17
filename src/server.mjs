import { PORT } from './common/config.mjs';
import { app } from './app.mjs';

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
