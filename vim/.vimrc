" Execucao do gerenciador de plugins
execute pathogen#infect()

" configura o toogle do NERDTree com CTRL+N
map <C-n> :NERDTreeToggle<CR>
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

" Remapeia o atalho do emmet
let g:user_emmet_leader_key=','

" esquema de cores escuro
colorscheme industry
" colorscheme Tomorrow-Night
" colorscheme Tomorrow-Night-Eighties
" colorscheme Tomorrow-Night-Bright

" tamanho da identacao
set tabstop=2

" identifica o tipo de arquivo e identa
filetype plugin indent on

" colorir o editor
syntax on

" deixar coerente identacao com tamanho de TAB
set shiftwidth=2

" comportamento usual do backspace
set backspace=2

" Esse comando serve para numerar as linhas
set number

" fazer calculo da distancia das linhas
set relativenumber

" busca incremental - feedback enquando busco
set incsearch

" destaque nos resultados
set hlsearch

" salvar na codificacao desejada
set fileencoding=utf-8

" visualizar na codificacao desejada
set encoding=utf-8

" usar espacos no lugar de TAB
set expandtab

" backspace respeitar indentacao
set softtabstop=2

