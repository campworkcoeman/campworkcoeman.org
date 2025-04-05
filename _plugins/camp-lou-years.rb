module Jekyll
  # Can be replaced with {{'now' | date: "%Y" | minus: 1924 }}
  class CampYearsTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "#{@text} #{Time.now.year - 1924}"
    end
  end
  
  # Can be replaced with {{'now' | date: "%Y" | minus: 1980 }}
  class LouYearsTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "#{@text} #{Time.now.year - 1980}"
    end
  end

  # Can be replaced with {{'now' | date: "%Y" | minus: 1988 }}
  class JeffYearsTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "#{@text} #{Time.now.year - 1988}"
    end
  end
end

Liquid::Template.register_tag('camp_years', Jekyll::CampYearsTag)
Liquid::Template.register_tag('lou_years', Jekyll::LouYearsTag)
Liquid::Template.register_tag('jeff_years', Jekyll::JeffYearsTag)
