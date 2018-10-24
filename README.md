# hexo-permalink-invalid-char


A Hexo plugin which convert invalid chars to custom separator.

> `_posts/C#简介.md` => `http://your-site/C_简介/`

## Install

```bash
npm i hexo-permalink-invalid-char --save
```

## Usage

Add configuration in `_config.yml`

```yaml
# https://github.com/wayneshao/hexo-permalink-invalid-char
permalink_invalid_char:
  enable: true
  separator: '_' # default: '_'
```

## Options

```yaml
permalink_invalid_char:
  enable: true    # Enable this plugin
  separator: '_'  # Separator of the invalid char replaced, default: '_'
```

## License

MIT