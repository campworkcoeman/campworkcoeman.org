module Jekyll
  class CampYearsTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "#{@text} #{Time.now.year - 1924}"
    end
  end
  
  class LouYearsTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "#{@text} #{Time.now.year - 1980}"
    end
  end
end

Liquid::Template.register_tag('camp_years', Jekyll::CampYearsTag)
Liquid::Template.register_tag('lou_years', Jekyll::LouYearsTag)
